import { DisplayCard } from "@/app/components/DisplayCard";

export const News = () => {
  return (
    <div className="squeezetainer py-[10vh] bg-slate-50">
      <div className="grid grid-cols-1  grid-rows-1 gap-12">
        <div className="flex flex-col gap-6 col-span-1 ">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-blue-500">
              EXTRA EXTRA READ ALL ABOUT IT
            </span>
            <h2 className=" text-3xl  lg:text-4xl font-semibold">News</h2>
          </div>
        </div>
        <DisplayCard
          title="The Pantanal Partnership"
          description="...promoting music education and low energy refridgeration in Brazil"
          imageUrl="/Images/aboutUsImage.JPG"
        />
      </div>
    </div>
  );
};
