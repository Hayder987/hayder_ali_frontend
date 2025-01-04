import MySkill from "../components/homeComponents/MySkill";

const SkillPage = () => {
    return (
        <div className="container mx-auto py-10 md:py-16 px-4">
            <h1 className="text-2xl md:text-4xl font-semibold text-center mb-8">My Skill</h1>
            <MySkill></MySkill>
        </div>
    );
};

export default SkillPage;