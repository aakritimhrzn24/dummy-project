// export default function Header(){
//     return(
//         <div className="bg-red-200">
//          <div>
//             <h1>Image</h1>
//             </div>   
//         <h1>Header</h1>
//         </div>
//     )
// }

export default function Header() {
    return (
        <div className="bg-red-200 p-4">
            {/* Logo and Image container */}
            <div className="flex justify-between items-center mb-4">
                {/* Logo (left side) */}
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5LYBSp2AEYuktVf9Y6lfAfxiZHW6m0XDqTQ&s"
                        alt="Logo"
                        className="w-12 h-10" // Adjust size as needed
                    />
                </div>

                {/* Image (right side) */}
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSukmb8Zn3Kztj84KQZ2hfqq0FvZvkSfkIk1A&s"
                        alt="Description of image"
                        className="w-20 h-25" // Adjust size as needed
                    />
                </div>
            </div>

            {/* Main Header */}
            <h1 className="text-3xl font-semibold text-gray-800 text-center">event</h1>

            {/* Search Box */}
            <div className="mt-4 flex justify-center">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-1/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    );
}
