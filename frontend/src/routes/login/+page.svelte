<svelte:head>
    <title>Login | TradeTech</title>
</svelte:head>

<script>
    import { Mail, Lock } from "lucide-svelte";

    let email = $state("");
    let password = $state("");
</script>

<div class="page">

    <div class="login-card">

        <h1>WELCOME</h1>

        <p class="subtitle">
            Sign In your account
        </p>

        <div class="form-group">

            <label for="email">
                Email
            </label>

            <div class="input-box">

                <Mail
                    size={28}
                    strokeWidth={2.5}
                    class="icon"
                />

                <input
                    id="email"
                    type="email"
                    bind:value={email}
                    placeholder="Enter your email"
                />

            </div>

        </div>

        <div class="form-group">

            <label for="password">
                Password
            </label>

            <div class="input-box">

                <Lock
                    size={28}
                    strokeWidth={2.5}
                    class="icon"
                />

                <input
                    id="password"
                    type="password"
                    bind:value={password}
                    placeholder="Enter your password"
                />

            </div>

        </div>

        <a href="/" class="forgot">
            Forgot your password?
        </a>

        <button class="login-btn">
            Sign In
        </button>

        <p class="signup">
            Don't have an account?
            <span>Sign Up</span>
        </p>

    </div>

</div>

<style>
.page{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#f5f5f5;
    padding:40px;
}

.login-card{
    width:760px;
    background:#5f73d1;
    border-radius:14px;
    padding:35px 60px 50px;
    box-shadow:8px 8px 0 #3e3e3e;
    position:relative;
}

.login-card h1{
    margin:0;
    margin-top:-70px;
    text-align:center;
    font-size:82px;
    color:white;
    font-weight:900;
    letter-spacing:2px;
    text-shadow:
        -3px -3px 0 #999,
        3px -3px 0 #999,
        -3px 3px 0 #999,
        3px 3px 0 #999,
        7px 7px rgba(0,0,0,.25);
}

.subtitle{
    margin-top:8px;
    margin-bottom:70px;
    text-align:center;
    color:white;
    font-size:26px;
    font-weight:700;
}

.form-group{
    margin-bottom:48px;
}

.form-group label{
    display:block;
    margin-bottom:18px;
    color:white;
    font-size:28px;
    font-weight:900;
}

.input-box{
    display:flex;
    align-items:center;
    gap:18px;
    height:74px;
    padding:0 24px;
    background:#9db8ff;
    border-radius:14px;
    box-shadow:inset 0 0 12px rgba(255,255,255,.45);
}

.input-box input{
    flex:1;
    border:none;
    outline:none;
    background:transparent;
    color:white;
    font-size:28px;
    font-weight:700;
}

.input-box input::placeholder{
    color:#dfe7ff;
}

.forgot{
    display:block;
    margin-top:-20px;
    margin-bottom:45px;
    text-align:right;
    text-decoration:none;
    color:#dce5ff;
    font-size:22px;
    font-weight:800;
}

.login-btn{
    width:100%;
    height:78px;
    border:none;
    border-radius:14px;
    cursor:pointer;
    color:white;
    font-size:34px;
    font-weight:900;
    background:linear-gradient(90deg,#d044ea,#ef49db);
    box-shadow:0 8px 20px rgba(210,0,255,.35);
    transition:.2s;
}

.login-btn:hover{
    transform:translateY(-2px);
}

.signup{
    margin-top:28px;
    text-align:center;
    color:white;
    font-size:24px;
    font-weight:700;
}

.signup span{
    font-weight:900;
}

@media(max-width:900px){

.login-card{
    width:100%;
    padding:30px;
}

.login-card h1{
    font-size:56px;
    margin-top:-55px;
}

.subtitle{
    font-size:20px;
    margin-bottom:45px;
}

.form-group label{
    font-size:22px;
}

.input-box{
    height:62px;
}

.input-box input{
    font-size:20px;
}

.login-btn{
    height:65px;
    font-size:28px;
}

.signup{
    font-size:18px;
}

.forgot{
    font-size:18px;
}

}

</style>