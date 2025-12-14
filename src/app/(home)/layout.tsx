import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

interface IProps {
  children: React.ReactNode;
}

export default function layout({ children }: IProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 bg-[#F4F4F0]" >{children}</div>
      <Footer />
    </div>
  );
}
