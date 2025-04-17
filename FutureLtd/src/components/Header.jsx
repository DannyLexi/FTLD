import { useState, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState(null); 

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    if (role) {
      setUserRole(role);
    } else {
      setUserRole(null); // Ensure the state is reset if there's no role in localStorage
    }
  }, []); 

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    setUserRole(null);  // Immediately update the state to trigger a re-render
    window.location.href = "/"; //  redirect to the homepage after logout
  };

  
  useEffect(() => {
    // This will trigger a re-render whenever userRole changes
  }, [userRole]);

  return (
    <header className="relative flex items-center justify-between px-4 py-3 sticky top-0 z-50 shadow-sm" style={{ backgroundColor: "#f8fafc" }}>
      <div className="flex items-center">
        <a href="/">
          <img
            src="https://s3-alpha-sig.figma.com/img/5e7d/0eea/88ac55de5a59a62de8969baf901d0335?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HZ0jSBwObo4pGkECKxTnkRaMkFo9u~W8JISwuEuZg6pJkvNMLkU1TC7Cl~MYD~UxP9q0xEvzTVJXUD7~yijJmMeU2k6Yb0XJOpO2LxvVhm9srKWJM6d4pAGD9sRN4ri0ZQs18K~XphWs06dqI4NVCDzG4aq70zoQSe6QepBRe9bOW5SCXaEM0VkCwxEDJvxW-Kd4DwuS44JIXqkEOWcZb2gryCp3jiu5OwLnlx~yrfGVY4TRGVBt-cMsEhSd637lakYe5mV9VhfMa5zlrXFOBIcNyybDXY47kqIDvBw4YkhvqpI5zk058-goRnxVeubSNBJY4YQXRe782K0ch4dYMA__"
            alt="Job Portal Logo"
            className="h-6 w-auto"
          />
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
        <a href="/" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Home</a>
        <a href="/job-board" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Job Board</a>
        {userRole !== "jobseeker" && (
          <a href="/for-employers" className="text-gray-700 hover:text-gray-900 text-sm font-medium">For Employers</a>
        )}
        {userRole !== "employer" && (
          <a href="/for-jobseekers" className="text-gray-700 hover:text-gray-900 text-sm font-medium">For Jobseekers</a>
        )}
        <a href="/about-us" className="text-gray-700 hover:text-gray-900 text-sm font-medium">About Us</a>
        <a href="/blog" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Blog</a>
      </nav>

      {/* Desktop Auth Buttons */}
      <div className="hidden md:flex items-center space-x-3">
        {userRole ? (
          <button
            onClick={handleLogout}
            className="px-4 py-1.5 bg-red-500 rounded-full text-sm font-medium text-white hover:bg-red-600"
          >
            Log Out
          </button>
        ) : (
          <div className="flex space-x-2">
            <a href="/login" className="px-4 py-1.5 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50">Login</a>
            <a href="/signup" className="px-4 py-1.5 bg-green-500 rounded-full text-sm font-medium text-white hover:bg-green-600">Signup</a>
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden flex items-center justify-center p-2 rounded-md border border-gray-300" onClick={toggleMenu} aria-expanded={isMenuOpen} aria-label="Toggle menu">
        <svg className="h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden z-10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Home</a>
            <a href="/job-board" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Job Board</a>
            {userRole !== "jobseeker" && (
              <a href="/for-employers" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">For Employers</a>
            )}
            {userRole !== "employer" && (
              <a href="/for-jobseekers" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">For Jobseekers</a>
            )}
            <a href="/about-us" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">About Us</a>
            <a href="/blog" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Blog</a>
            <div className="pt-4 pb-3 border-t border-gray-200">
              {userRole ? (
                <button
                  onClick={() => {
                    handleLogout();
                    closeMenu(); 
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-500 hover:bg-gray-50"
                >
                  Log Out
                </button>
              ) : (
                <>
                  <a href="/login" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Login</a>
                  <a href="/signup" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-green-500 hover:bg-gray-50">Signup</a>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
