const linksSocialMedias = {
    github: "Matheus2004a",
    instagram: "matheus.aaurelio",
    facebook: "matheus.a.pontes",
    linkedIn: "in/matheus-aurélio-3590a9207"
}

function changeSocialMedias() {
    for (let li of socialLinks.children) {
        const socialNames = li.getAttribute("class")

        li.children[0].href = `https://www.${socialNames}.com/${linksSocialMedias[socialNames]}`
    }
}

changeSocialMedias()

async function getInfosProfileGithub() {
    const urlProfile = `https://api.github.com/users/${linksSocialMedias.github}`

    await fetch(urlProfile).then((responseProfile) => {
        responseProfile.json()
        .then((dataResponse) => {
            username.textContent = dataResponse.name
            usernameLogin.textContent = dataResponse.login
            userLinkProfile.href = dataResponse.html_url
            photoProfile.src = dataResponse.avatar_url
            aboutMe.textContent = dataResponse.bio
            quantityFollowers.textContent = dataResponse.followers 
            quantityFollowing.textContent = dataResponse.following
        })
    })
}

getInfosProfileGithub()