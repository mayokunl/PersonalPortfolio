import HTMLFlipBook from 'react-pageflip';
import React from 'react';

function Book() {
    return (
        <div>
            <div style={{ height: "5vh" }}></div>
            
            <HTMLFlipBook 
                width={400} 
                height={600} 
                maxShadowOpacity={0.5}
                drawShadow={true}
                size="fixed"
            >
                <div className="demoPage">Page 1</div>
                <div className="demoPage">Page 2</div>
                <div className="demoPage">Page 3</div>
                <div className="demoPage">Page 4</div>
            </HTMLFlipBook>
            
        </div>
    );
}

export default Book;
