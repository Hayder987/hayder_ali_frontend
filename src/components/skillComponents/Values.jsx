const Values = () => {
  return (
    <div>
      <div className="">
        <p className="text-2xl text-left mb-3">Core Beliefs & Values</p>
        <ul className="list-disc py-4 px-6 flex flex-col gap-3 text-gray-300">
          <li className="">
            <span className="font-bold text-gray-200">
              Embracing Mistakes as Learning Opportunities:{" "}
            </span>{" "}
            I believe every mistake is a stepping stone to growth. Debugging,
            trial and error, and seeking help are all integral to becoming a
            better developer.
          </li>
          <li className="">
            <span className="font-bold text-gray-200">
              Continuous Learning:{" "}
            </span>{" "}
            Technology evolves rapidly, and staying updated is vital. I dedicate
            time to learning new frameworks, tools, and best practices.
          </li>
          <li className="">
            <span className="font-bold text-gray-200">
              Consistency Over Perfection:{" "}
            </span>{" "}
            I approach challenges with curiosity and persistence. I believe in
            the power of incremental learning and that no problem is unsolvable
            with the right approach.
          </li>
          <li className="">
            <span className="font-bold text-gray-200">
              Teamwork and Collaboration:{" "}
            </span>{" "}
            As a junior developer, I value working with experienced teammates,
            learning from their feedback, and contributing my unique perspective
            to team projects.
          </li>
          <li className="">
            <span className="font-bold text-gray-200">
              Documentation and Clean Code:{" "}
            </span>{" "}
            I prioritize writing code that is clean, readable, and
            well-documented, ensuring it’s easy to maintain and understand for
            myself and others.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Values;
