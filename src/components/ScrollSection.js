import React, { useState, useRef, useEffect } from 'react';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const imgUrls = [
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/301',
  'https://via.placeholder.com/302'
];

const ScrollSection = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const scrollRef = useRef();
  const sub0Ref = useRef();
  const sub1Ref = useRef();
  const sub2Ref = useRef();

  const handleScroll = (e) => {
    const scroll = scrollRef.current.getBoundingClientRect();
    const sub0 = sub0Ref.current.getBoundingClientRect();
    const sub1 = sub1Ref.current.getBoundingClientRect();
    const sub2 = sub2Ref.current.getBoundingClientRect();
    const subArr = [sub0, sub1, sub2];
    let diff = Number.MAX_SAFE_INTEGER;
    let photoIndex = 0;

    for (let i = 0; i < subArr.length; i++) {
      if (
        Math.abs(subArr[i].y - scroll.y) < diff) {
        diff = Math.abs(subArr[i].y - scroll.y);
        photoIndex = i;
      } 
    }
    setPhotoIndex(photoIndex);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className='min-h-screen flex justify-between'>
      <div className='relative flex-1'>
        <div className='sticky top-20 m-40' ref={ scrollRef }>
          <img src={ imgUrls[photoIndex] } alt='img' /> 
        </div>
      </div>
      <div className='flex flex-col items-cente w-1/2'>
        <div className='my-80' ref={ sub0Ref }>
          <h1>Lorem ipsum</h1>
          <p>{ lorem }</p>
        </div>
        <div className='my-80' ref={ sub1Ref }>
          <h1>Lorem ipsum</h1>
          <p>{ lorem }</p>
        </div>
        <div className='my-80' ref={ sub2Ref }>
          <h1>Lorem ipsum</h1>
          <p>{ lorem }</p>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;