import ScrollToTopIcon from "../assets/scroll-to-top.png";

export default function ScrollButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-1 left-1 sm:hidden" onClick={scrollToTop}>
      <img
        className="h-[40px] w-[40px] opacity-25 active:opacity-100"
        src={ScrollToTopIcon}
      ></img>
    </div>
  );
}
