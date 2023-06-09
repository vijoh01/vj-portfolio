
import React, { useEffect } from 'react';

export function AnimateOnScroll() {
    window.addEventListener('scroll', AnimateOnScroll);
    useEffect(() => {
      
          // Event handling logic
          console.log('Page scrolled!');
    })
}