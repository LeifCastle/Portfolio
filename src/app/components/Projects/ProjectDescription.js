export default function ProjectDescription({ project }) {
  return (
    <div className="flex">
      <p className="w-[calc(15vw*2.0661)]">
        Never forget another birthday! Birthday Buzz is a MERN stack application
        that sends you email reminders when it's someone's birthday. Simply add
        your friends and family to your "buzz list" and we'll automatically send
        you a customized reminder when they're birthday is coming up or on the
        day of.
      </p>
      <p className="w-[calc(15vw*2.0661)]">
        Features Email verification required for all user accounts (no
        spam/malicious usage) Quick & Simple process to add friends and family
        to your "buzz list" (reminder list) Choose when you want to be reminded
        Create a custom reminder message
      </p>
    </div>
  );
}
