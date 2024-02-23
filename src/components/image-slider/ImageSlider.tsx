'use client'
import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

interface ImageData {
  id: string;
  download_url: string;
  height: number;
  author: string;
  url: string;
  widtth: number;
}

function ImageSlider({ url="https://picsum.photos/v2/list", limit = 5, page = 1 }) {
  const [images, setImages] = useState<ImageData[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages (url: string) { 
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        console.log(data)
        setImages(data);
        setLoading(false);
      }
    } catch (error:any) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured ! {errorMsg}</div>;
  }


  return (
      <div className='flex my-3 w-full h-full items-center relative'>
        <BsArrowLeftCircleFill
        className='w-8 h-8 text-white filter drop-shadow-md absolute left-3'
        onClick={handlePrevious}
        />
        {images && images.length
          ? images.map((imageItem, index) => (
              <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={
                  currentSlide === index
                    ? "rounded-md shadow-md w-full h-[32rem]"
                    : "rounded-md shadow-md w-full h-[32rem] hidden"
                }
              />
            ))
          : null}
          <BsArrowRightCircleFill
          onClick={handleNext}
          className="w-8 h-8 text-white filter drop-shadow-md absolute right-3"
        />
        <div className="absolute bottom-1 w-full flex justify-center">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  key={index}
                  className={
                    currentSlide === index
                      ? "bg-white w-[1rem] h-[1rem] rounded-full border-none outline-none mx-1 cursor-pointer"
                      : "w-[1rem] h-[1rem] rounded-full border-none outline-none mx-1 cursor-pointer bg-slate-700"
                  }
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))
            : null}
        </div>
      </div>
  )
}

export default ImageSlider