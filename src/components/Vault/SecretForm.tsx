import { PLACEHOLDERS } from "../../consts/Placeholder";
import useSecret from "../../hooks/useSecret";
import Button from "../Button";

const SecretForm = () => {
  const { error, handleChange, handleSubmit, placeholderIndex, secret } =
    useSecret();

  return (
    <div className="flex flex-col gap-5 items-center w-full">
      <h1 className="text-white text-xl font-bold">Your secret vault</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full gap-5"
      >
        <textarea
          name="secret"
          id="secret"
          value={secret}
          className="rounded border border-black w-full p-2 bg-white placeholder:text-sm"
          placeholder={PLACEHOLDERS[placeholderIndex]}
          onChange={handleChange}
        />
        {error && <span className="text-red-500">{error}</span>}
        <Button
          className="text-white bg-indigo-500 hover:bg-indigo-600"
          text="Save secret"
        />
      </form>
    </div>
  );
};

export default SecretForm;
