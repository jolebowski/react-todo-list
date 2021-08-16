export default function Item() {
  return (
    <li className='border md:flex justify-between shadow-none items-center p-2 mt-3 mb-2'>
      <div className='p-3'>Txt</div>
      <div>
        <button className='bg-red-500 text-white px-4 py-2 hover:bg-red-600 rounded'>
          Supprimer
        </button>
      </div>
    </li>
  );
}
