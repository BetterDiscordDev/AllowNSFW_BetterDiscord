//META{"name":"AllowNSFW","authorId":"564843886434975745","website":"https://github.com/BetterDiscordDev/", "source":"https://github.com/BetterDiscordDev/AllowNSFW_BetterDiscord"}*//
module.exports = class AllowNSFW {
    getName() {return "AllowNSFW";}
    getDescription() {return "Allows NSFW channels to be viewed with a under 18 account.";}
    getVersion() {return "1.0.0";}
    getAuthor() {return "Blake";}
    load() {}
    start() {
        this.update();
    }
    stop() {}
    onSwitch() {
        this.update();
    }

    update () {
        var v = BdApi.findModuleByProps("getCurrentUser").getCurrentUser();
        if (typeof v === "undefined") return;
        
        v.nsfwAllowed = true;
    }
}
