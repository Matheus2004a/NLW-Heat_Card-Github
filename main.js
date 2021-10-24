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
    
    const promisse = await fetch(urlProfile).then((responseProfile) => {
        return responseProfile.json()
    })

    console.log(promisse)
}

getInfosProfileGithub()