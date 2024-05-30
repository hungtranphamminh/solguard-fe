import DocumentSideBar from "@/components/side-bar/document-side-bar";
import bg from "@/images/solshield/bg.png";

export default function Layout({ children }) {
  return (
    <div
      className="w-full  flex justify-center items-start relative overflow-visible"
      style={{
        background: `url(${bg.src})`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-full pt-[61px] flex justify-center items-start relative overflow-visible">
        <DocumentSideBar />
        {children}
      </div>
    </div>
  );
}
