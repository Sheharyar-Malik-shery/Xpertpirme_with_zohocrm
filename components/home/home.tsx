// components/Home.tsx
import ScheduleCallSection from "./ScheduleCallSection"
import MetaTag from "../metatag"
export default function HomePage() {
  return (
    <main>
      <MetaTag
        title="XpertPrime – Expert IT Services & Digital Solutions"
        description="XpertPrime provides expert IT services, software development, and digital solutions to help businesses grow online."
        image="https://lh3.googleusercontent.com/p/AF1QipOGspplbNrvuyu092DfcqNM-XLMTDCebZLjEztG=s1360-w1360-h1020-rw"
        url="https://xpertprime.net"
      />
      <ScheduleCallSection/>
    </main>
  );
}
