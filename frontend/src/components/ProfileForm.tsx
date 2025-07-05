import Instagram from "@/assets/instagram-icon.svg";
import Discord from "@/assets/discord-icon.svg";
import LINE from "@/assets/line-icon.svg";

function ProfileForm() {
  const formFields = [
    { label: "Full Name", value: "Penny Trationas", type: "text" },
    { label: "Nickname", value: "Lil Penny", type: "text" },
    { label: "Student ID", value: "61130500879", type: "text" },
    { label: "Nationality", value: "Uzbekistan", type: "text" }
  ];

  const socialMediaFields = [
    { label: "Instagram", value: "yung.brkeness.official", icon: Instagram, iconColor: "text-pink-500" },
    { label: "Discord", value: "Toast#6821", icon: Discord, iconColor: "text-indigo-400" },
    { label: "LINE ID", value: "toast.uz", icon: LINE, iconColor: "text-green-500" }
  ];

  return (
    <div className="col-span-8 space-y-5 pl-60 pr-30">
      {formFields.map((field, index) => (
        <div key={index} className="space-y-1.5">
          <label className="block text-lg font-[Poppins]">{field.label}</label>
          <input 
            defaultValue={field.value} 
            className="w-full px-4 py-2 text-xl rounded-xl bg-white text-black border-none outline-none h-12 font-[Poppins]" 
          />
        </div>
      ))}

      <div className="mt-12">
        <p className="text-lg mb-4 font-[Poppins]">Social media (optional)</p>
        <div className="space-y-4">
          {socialMediaFields.map((field, index) => (
            <div key={index} className="relative">
              <img 
                src={field.icon} 
                alt={field.label}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
              />
              <input 
                defaultValue={field.value} 
                className="w-full pl-18 pr-4 py-4 text-xl rounded-xl bg-white text-black border-none outline-none h-12 font-[Poppins]" 
                placeholder={field.label} 
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button className="px-16 py-2 rounded-xl bg-transparent border border-white text-white text-lg hover:bg-white/10 font-[Poppins]">Save</button>
      </div>
    </div>
  );
}

export default ProfileForm;