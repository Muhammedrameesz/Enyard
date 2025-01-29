import Header from "../components/About/Header"
import FeaturesSection from "../components/About/SecSection"
import ReviewSection from "../components/About/ReviewSection"
import ExperienceSection from "../components/About/ExperienceSection"
import ExprtiseSection from "../components/About/ExprtiseSection"
import DarkThemedSection from "../components/About/DarkThemedSection"
import HoverLogo from "../components/About/HoverLogo"
import OurTeam from "../components/About/OurTeam"
import Accordian from "../components/Accordian"

export default function About() {
  return (
    <>
    <Header/>
    <HoverLogo/>
    <FeaturesSection/>
    <ReviewSection/>
    <ExperienceSection/>
    <ExprtiseSection/>
    <OurTeam/>
    <DarkThemedSection/>
    <Accordian/>
    </>
  )
}
