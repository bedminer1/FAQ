import React from 'react'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useState } from 'react'
import { useSpring, animated } from 'react-spring'

export default function Accordian(props) {
    const [open, setOpen] = useState(false)

    const toggleHandler = (e) => {
        setOpen(!open)
    }

    const styles = {
        accordianTitle: {
          color: open ? "#f5deb3" : "#fff"
        }
      };

    const openAnimation = useSpring({
        from: { opacity: "0", maxHeight: "25px" },
        to: { opacity: "1", maxHeight: open ? "120px" : "25px" },
        config: { duration: "300" }
    });

    const iconAnimation = useSpring({
        from: {
          transform: "rotate(0deg)",
          color: "#ffff"
        },
        to: {
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          color: open ? "#f5deb3" : "#fff"
        },
        config: { duration: "120" }
      });
    
      return (
        <animated.div className="accordian__item" style={openAnimation}>
          <div className="accordian__header" onClick={toggleHandler}>
            <h4 style={styles.accordianTitle}>{props.title}</h4>
            <animated.i style={iconAnimation}>
              <ExpandMoreIcon />
            </animated.i>
          </div>
          <p className="accordian__content">{props.text}</p>
        </animated.div>
      );
    }
    

