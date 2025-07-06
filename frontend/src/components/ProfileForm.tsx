import Instagram from '@/assets/instagram-icon.svg';
import Discord from '@/assets/discord-icon.svg';
import LINE from '@/assets/line-icon.svg';

function ProfileForm() {
  const formFields = [
    { label: 'Full Name', value: 'Penny Trationas', type: 'text' },
    { label: 'Nickname', value: 'Lil Penny', type: 'text' },
    { label: 'Student ID', value: '61130500879', type: 'text' },
    { label: 'Nationality', value: 'Uzbekistan', type: 'text' },
  ];

  const socialMediaFields = [
    {
      label: 'Instagram',
      value: 'yung.brkeness.official',
      icon: Instagram,
      iconColor: 'text-pink-500',
    },
    { label: 'Discord', value: 'Toast#6821', icon: Discord, iconColor: 'text-indigo-400' },
    { label: 'LINE ID', value: 'toast.uz', icon: LINE, iconColor: 'text-green-500' },
  ];

  return (
    <div className="col-span-8 space-y-5 pr-30 pl-60">
      {formFields.map((field, index) => (
        <div key={index} className="space-y-1.5">
          <label className="block font-[Poppins] text-lg">{field.label}</label>
          <input
            defaultValue={field.value}
            className="h-12 w-full rounded-xl border-none bg-white px-4 py-2 font-[Poppins] text-xl text-black outline-none"
          />
        </div>
      ))}

      <div className="mt-12">
        <p className="mb-4 font-[Poppins] text-lg">Social media (optional)</p>
        <div className="space-y-4">
          {socialMediaFields.map((field, index) => (
            <div key={index} className="relative">
              <img
                src={field.icon}
                alt={field.label}
                className="absolute top-1/2 left-3 h-6 w-6 -translate-y-1/2 transform"
              />
              <input
                defaultValue={field.value}
                className="h-12 w-full rounded-xl border-none bg-white py-4 pr-4 pl-18 font-[Poppins] text-xl text-black outline-none"
                placeholder={field.label}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button className="rounded-xl border border-white bg-transparent px-16 py-2 font-[Poppins] text-lg text-white hover:bg-white/10">
          Save
        </button>
      </div>
    </div>
  );
}

export default ProfileForm;
