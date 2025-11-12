import React from 'react'
import { Link } from 'react-router-dom';

const footer = () => {
  return (
    <footer>
        <div 
          style={{ 
            width: "100%", 
            padding: 20, 
            minHeight: "20vh", 
            maxHeight: "30vh", 
            marginTop: 50,
          }}
        >
            <p style={{ fontSize: "30px", textAlign: "center" }}>
                Built with love by
                <span>
                    <Link style={{color: "white"}} className="nav-link" to={"https://youtube.com/"}>
                    Ashutosh Kumar Patel🤖💖👋
                    </Link>
                </span>
            </p>
        </div>
    </footer>
  );
};

export default footer;