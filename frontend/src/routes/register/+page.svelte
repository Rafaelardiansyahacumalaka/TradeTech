<svelte:head>
    <title>Register | TradeTech</title>
</svelte:head>


<script>
    import { User, Mail, Lock } from "lucide-svelte";

    let username = $state("");
    let email = $state("");
    let password = $state("");
    let confirmPassword = $state("");

    async function handleRegister() {
        if (!username || !email || !password || !confirmPassword) {
            alert("Semua field wajib diisi!");
            return;
        }

        if (password !== confirmPassword) {
            alert("Password tidak sama!");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })
            });

            const result = await response.json();

            if (!response.ok) {
                alert(result.message);
                return;
            }

            alert("Register berhasil!");
            window.location.href = "/login";
        } catch (error) {
            alert("Server tidak dapat dihubungi");
        }
    }
</script>

<div class="page">

    <div class="register-card">

        <h1>TradeTech</h1>
        <p>Create your account</p>

        <label for="username">Username</label>

<div class="input-group">

    <User size="20"/>

    <input
        id="username"
        bind:value={username}
        type="text"
        placeholder="Enter your username"
    >

</div>

 <label for="email">Email</label>

<div class="input-group">
    <Mail size="20"/>
    <input
        id="email"
        bind:value={email}
        type="email"
        placeholder="Enter your email"
    />
</div>

        <label for="password">Password</label>

<div class="input-group">

    <Lock size="20"/>

    <input
        id="password"
        bind:value={password}
        type="password"
        placeholder="Enter your password"
    >

</div>
<label for="confirmPassword">Confirm Password</label>

<div class="input-group">

    <Lock size="20"/>

    <input
        id="confirmPassword"
        bind:value={confirmPassword}
        type="password"
        placeholder="Confirm your password"
    >

</div>

        <button onclick={handleRegister}>
            Sign Up
        </button>

        <div class="login-link">
            Already have an account?
            <a href="/login">Login</a>
        </div>

    </div>

</div>
<svelte>
<style>

:global(body){
    margin:0;
    font-family:Inter,sans-serif;
    background:#d9d9d9;
}

.page{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:30px;
}

.register-card{
    width:430px;
    background:linear-gradient(180deg,#655178,#6e3aa4);
    border-radius:14px;
    padding:40px;
    box-shadow:8px 8px 0 #333;
}

h1{
    margin:0;
    text-align:center;
    color:white;
    font-size:42px;
    font-weight:900;
}

p{
    margin-top:5px;
    text-align:center;
    color:white;
    font-weight:700;
    margin-bottom:35px;
}

label{
    display:block;
    color:white;
    font-weight:700;
    margin-bottom:8px;
    margin-top:18px;
}

.input-group{
    display:flex;
    align-items:center;
    gap:10px;
    background:#8fb2ff;
    padding:14px;
    border-radius:8px;
}

.input-group input{
    width:100%;
    border:none;
    outline:none;
    background:none;
    color:white;
    font-size:16px;
}

.input-group input::placeholder{
    color:#dde7ff;
}

.input-group :global(svg){
    color:#dde7ff;
}

button{
    width:100%;
    margin-top:35px;
    padding:15px;
    border:none;
    border-radius:8px;
    background:#d547ff;
    color:white;
    font-size:24px;
    font-weight:800;
    cursor:pointer;
    transition:.2s;
}

button:hover{
    transform:translateY(-2px);
}

.login-link{
    margin-top:18px;
    text-align:center;
    color:white;
    font-size:14px;
}

.login-link a{
    color:white;
    font-weight:700;
    text-decoration:none;
}

.login-link a:hover{
    text-decoration:underline;
}

</style>
</svelte>