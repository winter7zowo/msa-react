import { useRef, useEffect } from 'react'
import './Details.css'
import { IoIosArrowBack } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";

function App() {
  const textRef = useRef(null);
  const thumbRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const thumbElement = thumbRef.current;

    const updateThumbPosition = () => {
      const scrollTop = textElement.scrollTop;
      const scrollHeight = textElement.scrollHeight;
      const clientHeight = textElement.clientHeight;

      const thumbHeight = (clientHeight / scrollHeight) * clientHeight;
      const thumbTop = (scrollTop / scrollHeight) * clientHeight;

      thumbElement.style.height = `${thumbHeight}px`;
      thumbElement.style.top = `${thumbTop}px`;
    };

    const handleThumbDrag = (e) => {
      const startY = e.clientY;
      const startScrollTop = textElement.scrollTop;
      const clientHeight = textElement.clientHeight;
      const scrollHeight = textElement.scrollHeight;

      const onMouseMove = (moveEvent) => {
        const deltaY = moveEvent.clientY - startY;
        const newScrollTop = startScrollTop + (deltaY / clientHeight) * scrollHeight;
        textElement.scrollTop = newScrollTop;
        updateThumbPosition();
      };

      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);

      e.preventDefault();
    };

    textElement.addEventListener("scroll", updateThumbPosition);
    thumbElement.addEventListener("mousedown", handleThumbDrag);

    updateThumbPosition();

    return () => {
      textElement.removeEventListener("scroll", updateThumbPosition);
      thumbElement.removeEventListener("mousedown", handleThumbDrag);
    };
  }, []);

  return (
    <>

      <div className="back-button">
        <IoIosArrowBack />
      </div>
      <div className="menu-button">
        <TfiMenuAlt />
      </div>
      <div className="previewer">
        <img src="src\image\preview.jpg" alt="PA preview" />
      </div>
      <p className="title">
        作品名称
      </p>
      <div className="description">
        <div className="author">
          <p id="content">
            作者
          </p>
          <img src="src\image\ok.jpg" alt="author"></img>
        </div>
        <div className="teacher">
          <p id="content">
            导师
          </p>
          <img src="src\image\ok.jpg" alt="teacher"></img>
        </div>
      </div>
      <div className="author-description">
        <p id="content">
          作者介绍
        </p>
        <p id="text">
          我的世界下雨了怎么办？

          我的世界下雨了是怎么回事呢？相信大家都很熟悉，但是我的世界下雨了是怎么回事呢，下面就让小编带大家一起了解吧。
        </p>
      </div>
      <div className="work-description">
        <p id="content">
          作品介绍
        </p>
        <div id="text-container">
          <p id="text" ref={textRef}>
            我的世界下雨了怎么办？

            我的世界下雨了是怎么回事呢？相信大家都很熟悉，但是我的世界下雨了是怎么回事呢，下面就让小编带大家一起了解吧。

            我的世界下雨了，其实就是我的世界下雨了，大家可能会很惊讶我的世界下雨了怎么会是我的世界下雨了呢？但事实就是这样，小编也感到非常惊讶。那么这就是关于我的世界下雨了的事情了，大家有什么想法呢，欢迎在评论区留言告诉小编一起讨论哦！

            1，我的世界下雨可以使用指令让雨停止，首先我们按T打开聊天框，输入指令/weather clear。

            2，接着我们输出指令，就可以成功让雨停止了

            我的世界下雨了怎么办？

            我的世界下雨了是怎么回事呢？相信大家都很熟悉，但是我的世界下雨了是怎么回事呢，下面就让小编带大家一起了解吧。

            我的世界下雨了，其实就是我的世界下雨了，大家可能会很惊讶我的世界下雨了怎么会是我的世界下雨了呢？但事实就是这样，小编也感到非常惊讶。那么这就是关于我的世界下雨了的事情了，大家有什么想法呢，欢迎在评论区留言告诉小编一起讨论哦！

            1，我的世界下雨可以使用指令让雨停止，首先我们按T打开聊天框，输入指令/weather clear。

            2，接着我们输出指令，就可以成功让雨停止了
          </p>
          <div id="custom-scrollbar">
            <div className="scroll-thumb" ref={thumbRef}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
