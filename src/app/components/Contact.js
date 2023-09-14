"use client";
export default function Contact() {
  function showContact(type) {
    let contactChildren = document.querySelectorAll(".contact");
    contactChildren.forEach((contact) => {
      if (contact.id !== type) {
        contact.setAttribute("hidden", "hidden");
      }
    });
    document.querySelector(`#${type}`).removeAttribute("hidden");
  }

  return (
    <div className="flex flex-col items-center py-5">
      <p className="text-3xl font-heading">Contact Me</p>
      <hr className="w-[45vw] mt-2 border-slate-500 opacity-25"></hr>
      <div
        id="contactInfo"
        className="flex justify-center items-center h-[60px] text-grayText font-regular text-center"
      >
        <p id="address" className="contact mt-4">
          Leifur Castle <br />
          Ferndale Wa, 98248 <br />
        </p>
        <p id="phone" hidden="hidden" className="contact mt-4">
          (208) 310-2163
        </p>
        <p id="email" hidden="hidden" className="contact mt-4">
          leifurcastle@gmail.com
        </p>
      </div>
      <div className="flex gap-8 h-[60px] text-center items-center">
        <div className="flex items-center justify-center w-[45px]">
          <div
            className="inline-block w-[40px] h-[40px] bg-contain bg-location hover:w-[45px] hover:h-[45px] hover:cursor-pointer transition-{opacity}  duration-[250ms]"
            href="https://www.linkedin.com/in/leifurcastle/"
            onClick={() => showContact("address")}
          ></div>
        </div>
        <div className="flex items-center justify-center w-[45px]">
          <div
            className="inline-block w-[40px] h-[40px] bg-contain bg-phone hover:w-[43px] hover:h-[45px] hover:cursor-pointer transition-{opacity}  duration-[250ms]"
            href="https://www.linkedin.com/in/leifurcastle/"
            onClick={() => showContact("phone")}
          ></div>
        </div>
        <div className="flex items-center justify-center w-[45px]">
          <div
            className="inline-block w-[40px] h-[40px] bg-contain bg-email hover:w-[43px] hover:h-[45px] hover:cursor-pointer transition-{opacity}  duration-[250ms]"
            href="https://www.linkedin.com/in/leifurcastle/"
            onClick={() => showContact("email")}
          ></div>
        </div>
        <div className="flex items-center justify-center w-[45px]">
          <a
            className="inline-block w-[40px] h-[40px] bg-contain bg-linkedInLogoBlue hover:w-[45px] hover:h-[45px] transition-{opacity}  duration-[250ms]"
            href="https://www.linkedin.com/in/leifurcastle/"
            target="_blank"
          ></a>
        </div>
      </div>
    </div>
  );
}
