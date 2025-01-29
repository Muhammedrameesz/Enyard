import OurTeams from "../components/OurTeam/OurTeam"
import TalentedTeam from "../components/OurTeam/TalentedTeam"
import DarkSection from "../components/About/DarkThemedSection.jsx"
import OurTeamSkills from "../components/OurTeam/OurTeamSkills.jsx"
import Install from "../components/OurTeam/install.jsx"

export default function OurTeam() {
  return (
    <>
    <OurTeams/>
    <TalentedTeam/>
    <DarkSection/>
    <OurTeamSkills/>
    <Install/>
    </>
  )
}
