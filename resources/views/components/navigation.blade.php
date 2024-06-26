<nav class="bg-white">
    <div class="max-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex item-center justify-between h-16">
            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <button class="px-4 pb-2 text-gray-700 text-2xl rounded-lg hover:bg-gray-200">
                    <i class="fas fa-bars"></i>
                </button>

                <form action="#" method="get" class="w-full invisible sm:visible">
                    <div class="relative text-gray-500 ml-6 px-3 pt-1">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-700 text-xl">
                            <button type="submit" class="pt-1 focus:outline-none focus:shadow-outline">
                                <i class="fas fa-search"></i>
                            </button>
                        </span>
                        <input type="search" class="py-2 text-md text-gray-900 w-full rounded-md pl-10 bg-transparent placeholder-gray-800 focus:outline-none focus:bg-white focus:text-gray-800" placeholder="Search">
                    </div>
                </form>
            </div>

            <div class="ml-3 relative">
                <div>
                    <button id="notificationsBtn" class="text-xl text-gray-800 px-4 py-2 focus:outline-none"><i class="fas fa-bell"></i></button>
                </div>

                <div id="notificationsDiv" class="hidden origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg py-1 bg-white ring-1 ring-black right-opacity-5 focus:outline-none shadow-lg ring-1 ring-black ring-opacity-5">
                    <p class="p-2 text-sm text-gray-700">Not result...</p>
                </div>
            </div>

            <div class="ml-3 relative">
                <div>
                    <button id="colorsBtn" class="text-xl text-gray-800 px-4 py-2 focus:outline-none"><i class="fa fa-palette"></i></button>
                </div>

                <div class="hidden origin-top-right absolute right-0 mt-2 w-20 rounded-md shadow-lg py-1 bg-white ring-1 ring-black right-opacity-5 focus:outline-none z-10 shadow-lg ring-1 ring-black ring-opacity-5" id="colrosDiv">
                    <p class="p-2 text-sm text-gray-700">Colors</p>
                    <div class="py-2">
                        <button onclick="setColor('bg-blue-500')" class="bg-blue-500 w-12 h-8 rounded block mx-auto my-1"></button>
                        <button onclick="setColor('bg-indigo-500')" class="bg-indigo-500 w-12 h-8 rounded block mx-auto my-1"></button>
                        <button onclick="setColor('bg-green-500 ')" class="bg-green-500 w-12 h-8 rounded block mx-auto my-1"></button>
                        <button onclick="setColor('bg-red-500')" class="bg-red-500 w-12 h-8 rounded block mx-auto my-1"></button>
                        <button onclick="setColor('bg-gray-500')" class="bg-gray-500 w-12 h-8 rounded block mx-auto my-1"></button>
                    </div>
                </div>
            </div>

            <!-- Profile dropdown -->
        <div class="relative ml-3 mt-2">
            <div>
              <button type="button" id="profileBtn" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white">

                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" src="{{asset('image/anime.png')}}" alt="">
              </button>
            </div>

            <div class="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" id="profileDiv">
              <!-- Active: "bg-gray-100", Not Active: "" -->
              <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"   id="user-menu-item-0"> <i class="fas fa-user mr-2"></i> Your Profile
              </a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1"><i class="fas fa-cog mr-2"></i> Settings
              </a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2"><i class="fas fa-sign-out-alt mr-2"></i> Sign out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>


        </div>
    </div>
</nav>
