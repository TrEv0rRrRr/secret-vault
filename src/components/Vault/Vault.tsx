import useSecretContext from "../../hooks/useSecretContext";

const Vault = () => {
  const { secrets, deleteSecret } = useSecretContext();

  return (
    <div className="flex flex-col gap-5 items-center w-full">
      <h1 className="text-white text-xl font-bold">Your secrets</h1>
      <ul className="text-white space-y-2">
        {secrets.length > 0 ? (
          secrets.map(({ secret, id }) => (
            <li
              key={id}
              className="flex flex-row items-center justify-between gap-3 bg-indigo-700 px-4 py-2 rounded"
            >
              {secret}
              <button
                aria-label="Delete secret"
                className="text-white cursor-pointer"
                onClick={() => deleteSecret(id)}
                title="Delete secret"
              >
                ❌
              </button>
            </li>
          ))
        ) : (
          <li className="">You don't have any secret.</li>
        )}
      </ul>
    </div>
  );
};

export default Vault;
