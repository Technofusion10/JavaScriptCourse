@include('layouts.Login-head')

    <main >
        <h1 class="text-4xl font-bold text-white text-center">{{$LoginTitle}}</h1>
            <div class="relative flex flex-col m-6 space-y-8 bg-teal-200 shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                <div class="flex flex-col justify-center p-8 md:p-14">
                    <span class="mb-3 text-4xl font-bold">Welcome back</span>
                    <span class="font-light text-gray-500 mb-8">
                        Welcome back! Please enter you cridentials
                    </span>
                    <div id="msg"></div>
                    <form action="#" method="get" id="myForm" class="myForm">
                        {{-- @csrf --}}
                        <div class="form-element py-4">
                            <label for="email" class="mb-2 text-md">Email</label>
                            <input
                            type="email"
                            class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                            name="email"
                            id="email"
                            >
                        </div>
                        <div class="form-element py-4">
                            <label for="password" class="mb-2 text-md">Password</label>
                            <input
                            type="password"
                            class="password w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                            name="password"
                            id="password"
                            >
                        </div>
                        <div class="flex justify-between w-full py-4">
                            <div class="mr-24">
                                <input type="checkbox" class="mr-2" name="ch" id="chs">
                                <span class="text-md">Remember me for 30 days</span>
                            </div>
                            <span class="font-bold text-md">Forgot password</span>
                        </div>
                        <button id="btn" type="submit" class="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
                            Sign in
                        </button>

                        <ul class="items">
                            <li class="item mt-2 p-1 rounded font-semibold bg-gray-500 w-fit hover:bg-blue-500 transition ease-in-out delay-150 cursor-pointer">Value 1</li>
                            <li class="item mt-2 p-1 rounded font-semibold bg-gray-500 w-fit hover:bg-blue-500 transition ease-in-out delay-150 cursor-pointer ">Value 2</li>
                            <li class="item mt-2 p-1 rounded font-semibold bg-gray-500 w-fit hover:bg-blue-500 transition ease-in-out delay-150 cursor-pointer ">Value 3</li>
                        </ul>

                    </form>
                </div>
                <div class="relative">
                    <img
                    src="{{asset('/image/login-pic.png')}}"
                    alt="img"
                    class="w-[600px] h-full hidden rounded-r-2xl md:block object-cover"
                    >
                </div>
            </div>
            <p class="text-white text-center">Developed By : I.T. REGION 10</p>
    </main>

@include('layouts.Login-foot')
