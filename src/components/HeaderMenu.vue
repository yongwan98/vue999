<template>
    <div>
        <header id="header">
            <div class="site"><router-link to="/site">Site</router-link></div>
            <div class="logo"><router-link to="/">YongWan</router-link></div>
            <div class="nav">
                <ul>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/reference">Reference</router-link></li>
                    <li><router-link to="/script">Script</router-link></li>
                    <li><router-link to="/animation">Animation</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                </ul>
            </div>
        </header>
        <router-view />
    </div>
</template>
