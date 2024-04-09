export default function Inputbox({ label }) {
  return (
    <>
      <div className="flex rounded-lg bg-red-200 text-black p-3">
        <div className="w-1/2 mb-2">
          <label htmlFor="" className="inline-block">
            {label}
          </label>
          <input
            type="number"
            placeholder="amount"
            className="outline-none w-full bg-transparent py-1.5"
          />
        </div>
        <div className="w-1/2 flex flex-wrap text-right justify-end">
          <p className="mb-2 w-full">currency type</p>
          <select
            name=""
            id=""
            className="p-1 cursor-pointer bg-gray-100 outline-none rounded-lg "
          >
            <option value=""></option>
          </select>
        </div>
      </div>
    </>
  );
}
