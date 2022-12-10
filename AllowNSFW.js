//META{"name":"AllowNSFW","authorId":"938876130897829938","website":"https://github.com/BlakeDeveloper", "https://github.com/Blake123231/AllowNSFW_BetterDiscord/"}*//

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
