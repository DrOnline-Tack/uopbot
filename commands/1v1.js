
let canMakeTour = function(room, user) {
    // I'm gonna use this a lot so why not make a function for it
    if (room != '1v1' && room != '1v1typechallenge') return false;
    if (!user.can(room, "%")) return false;
    if (room.tournament) {
        room.send("A tournament is already going on.");
        return false;
    }
    return true;
}

module.exports = {
    '1v1om': function(room, user, args) {
        if (room != '1v1' && room != '1v1typechallenge') return false;
        if (!user.can(room, "%")) return false;
        let text = "/addhtmlbox ";
        text += "[Gen 7] 1v1, [Gen 7] UU 1v1, [Gen 7] LC 1v1, [Gen 7] 2v2 Doubles<br>";
        text += "<a href='https://www.smogon.com/forums/threads/1v1-old-gens.3646875/'>1v1 Past Gens</a>: [Gen 6] 1v1, [Gen 5] 1v1, [Gen 4] 1v1, [Gen 3] 1v1<br>";
        text += "<a href='https://www.smogon.com/forums/threads/1v1-oms.3648454/'>1v1 OMs</a>: AAA 1v1, AG 1v1, Inverse 1v1, Monotype 1v1, No Z 1v1, STABmons 1v1";
        room.send(text);
    },
    randtour: function(room, user, args) {
        let tourtypes = [
            "1v1",
            "2v2",
            "gen61v1",
            "gen51v1",
            "gen41v1",
            "gen31v1",
            "aaa",
            "ag",
            "inverse",
            "mono",
            "noz",
            "stab",
            "uu1v1",
            "monopoke"
        ]
        Commands[Utils.select(tourtypes)](room, user, args);
    },
    chill: function(room, user, args) {
        if (!canMakeTour(room, user)) return;
        Commands['1v1'](room, user, ["rr"]);
        room.startTour("chill");
    },
    '1v1': function(room, user, args) {
        if (!canMakeTour(room, user)) return;
        if (args) {
            if (args[0].startsWith("rr")) {
                let count = parseInt(args[0].substring(2));
                if (count) room.send("/tour create 1v1, rr,, " + count);
                else room.send("/tour create 1v1, rr");
            }
            else if (args[0].startsWith("e")){
                let count = parseInt(args[0].substring(1));
                if (count) room.send("/tour create 1v1, elim,, " + count);
                else room.send("/tour create 1v1, elim");
            }
            else {
                room.send("/tour create 1v1, elim")
            }
        }
        else room.send("/tour create 1v1, elim");
        if (args[0] === 'o') room.startTour("o"); // Make a tour object manually instead of doing it in parser so the "Official" flag can be passed
    },
    '2v2': function(room, user, args) {
        if (!canMakeTour(room, user)) return;
        if (args) {
            if (args[0].startsWith("rr")) {
                let count = parseInt(args[0].substring(2));
                if (count) room.send("/tour create 2v2, rr,, " + count);
                else room.send("/tour create 2v2, rr");
            }
            else if (args[0].startsWith("e")){
                let count = parseInt(args[0].substring(1));
                if (count) room.send("/tour create 2v2, elim,, " + count);
                else room.send("/tour create 2v2, elim");
            }
            else {
                room.send("/tour create 2v2, elim")
            }
        }
        else room.send("/tour create 2v2, elim");
        if (args[0] === 'o') room.startTour("o"); // Make a tour object manually instead of doing it in parser so the "Official" flag can be passed
    },
    oras: 'gen61v1',
    oars: 'gen61v1',
    gen61v1: function(room, user, args) {
        if (!canMakeTour(room, user)) return;
        if (args) {
            if (args[0].startsWith("rr")) {
                let count = parseInt(args[0].substring(2));
                if (count) room.send("/tour create gen61v1, rr,, " + count);
                else room.send("/tour create gen61v1, rr");
            }
            else if (args[0].startsWith("e")){
                let count = parseInt(args[0].substring(1));
                if (count) room.send("/tour create gen61v1, elim,, " + count);
                else room.send("/tour create gen61v1, elim");
            }
            else {
                room.send("/tour create gen61v1, elim")
            }
        }
        else room.send("/tour create gen61v1, elim");
        if (args[0] === 'o') room.startTour("o"); // Make a tour object manually instead of doing it in parser so the "Official" flag can be passed
    },
    bw: 'gen51v1',
    gen51v1: function(room, user, args) {
        if (!canMakeTour(room, user)) return;
        if (args) {
            if (args[0].startsWith("rr")) {
                let count = parseInt(args[0].substring(2));
                if (count) room.send("/tour create gen51v1, rr,, " + count);
                else room.send("/tour create gen51v1, rr");
            }
            else if (args[0].startsWith("e")){
                let count = parseInt(args[0].substring(1));
                if (count) room.send("/tour create gen51v1, elim,, " + count);
                else room.send("/tour create gen51v1, elim");
            }
            else {
                room.send("/tour create gen51v1, elim")
            }
        }
        else room.send("/tour create gen51v1, elim");
        if (args[0] === 'o') room.startTour("o"); // Make a tour object manually instead of doing it in parser so the "Official" flag can be passed
    },
    oldgen51v1: function(room, user, args) {
        if (!canMakeTour(room, user)) return;
        let bl = Banlist.gen51v1;
        let ruleset = "/tour rules Team Preview, "
        if (bl.bans.length) ruleset += "-" + bl.bans.join(", -") + ", ";
        if (bl.unbans.length) ruleset += "+" + bl.unbans.join(", +") + ", ";
        ruleset = ruleset.substring(0, ruleset.length - 2);
        room.send("/tour create " + bl.meta + ", elim");
        room.send("/tour name [Gen 5] 1v1");
        room.send(ruleset);
        if (args[0] === 'o') room.startTour("o"); // Make a tour object manually instead of doing it in parser so the "Official" flag can be passed
    },
    dp: 'gen41v1',
    gen41v1: function(room, user, args) {
        if (!canMakeTour(room, user)) return;
        let bl = Banlist.gen41v1;
        let ruleset = "/tour rules Team Preview, "
        if (bl.bans.length) ruleset += "-" + bl.bans.join(", -") + ", ";
        if (bl.unbans.length) ruleset += "+" + bl.unbans.join(", +") + ", ";
        ruleset = ruleset.substring(0, ruleset.length - 2);
        room.send("/tour create " + bl.meta + ", elim");
        room.send("/tour name [Gen 4] 1v1");
        room.send(ruleset);
        if (args[0] === 'o') room.startTour("o"); // Make a tour object manually instead of doing it in parser so the "Official" flag can be passed
    },
    adv: 'gen31v1',
    gsc: 'gen31v1',
    gen31v1: function(room, user, args) {
        if (!canMakeTour(room, user)) return;
        let bl = Banlist.gen31v1;
        let ruleset = "/tour rules Team Preview, "
        if (bl.bans.length) ruleset += "-" + bl.bans.join(", -") + ", ";
        if (bl.unbans.length) ruleset += "+" + bl.unbans.join(", +") + ", ";
        ruleset = ruleset.substring(0, ruleset.length - 2);
        room.send("/tour create " + bl.meta + ", elim");
        room.send("/tour name [Gen 3] 1v1");
        room.send(ruleset);
        if (args[0] === 'o') room.startTour("o"); // Make a tour object manually instead of doing it in parser so the "Official" flag can be passed
    },
    aaa1v1: 'aaa',
    aaa: function(room, user, args) {
        if (!canMakeTour(room, user)) return;
        let ruleset = "/tour rules Ignore Illegal Abilities, -" + Banlist.aaa['ability-bans'].join(', -') + ", -" + Banlist.aaa['mon-bans'].join(', -'); // Yes I realize this doesn't properly work if there aren't any ability-bans or mon-bans. I'll tackle that if we ever get to that point
        Commands['1v1'](room, user, args);
        room.send(ruleset);
        room.send("/tour name [Gen 7] AAA 1v1");
    },
    ag1v1: 'ag',
    ag: function(room, user, args) {
        if (!canMakeTour(room, user)) return;
        let ruleset = "/tour rules !" + Banlist.ag.join(', !') + ", +" + Banlist['1v1'].join(', +') + ", +Detect + Fightinium Z, +Focus Sash, +Perish Song";
        Commands['1v1'](room, user, args);
        room.send(ruleset);
        room.send("/tour name [Gen 7] AG 1v1");
    },
    inverse: function(room, user, args) {
        if (!canMakeTour(room, user)) return;
        let ruleset = "/tour rules Inverse Mod, "
        if (Banlist.inverse.bans.length) ruleset += "-" + Banlist.inverse.bans.join(", -") + ", ";
        if (Banlist.inverse.unbans.length) ruleset += "+" + Banlist.inverse.unbans.join(", +") + ", ";
        ruleset = ruleset.substring(0, ruleset.length - 2);
        Commands['1v1'](room, user, args);
        room.send(ruleset);
        room.send("/tour name [Gen 7] Inverse 1v1");
    },
    monotype: 'mono',
    mono: function(room, user, args) {
        if (!canMakeTour(room, user)) return;
        let ruleset = "/tour rules Same Type Clause, "
        if (Banlist.monotype.bans.length) ruleset += "-" + Banlist.monotype.bans.join(", -") + ", ";
        if (Banlist.monotype.unbans.length) ruleset += "+" + Banlist.monotype.unbans.join(", +") + ", ";
        ruleset = ruleset.substring(0, ruleset.length - 2);
        Commands['1v1'](room, user, args);
        room.send(ruleset);
        room.send("/tour name [Gen 7] Monotype 1v1");
    },
    noz: function(room, user, args) {
        if (!canMakeTour(room, user)) return;
        Commands['1v1'](room, user, args);
        room.send("/tour rules Z-Move Clause");
        room.send("/tour name [Gen 7] No Z 1v1");
    },
    stabmons: 'stab',
    stab: function(room, user, args) {
        if (!canMakeTour(room, user)) return;
        let ruleset = "/tour rules STABmons Move Legality, "
        if (Banlist.stabmons.bans.length) ruleset += "-" + Banlist.stabmons.bans.join(", -") + ", ";
        if (Banlist.stabmons.unbans.length) ruleset += "+" + Banlist.stabmons.unbans.join(", +") + ", ";
        ruleset = ruleset.substring(0, ruleset.length - 2);
        Commands['1v1'](room, user, args);
        room.send(ruleset);
        room.send("/tour name [Gen 7] STABmons 1v1");
    },
    uu: 'uu1v1',
    uu1v1: function(room, user, args) {
        if (!canMakeTour(room, user)) return;
        let ruleset = "/tour rules -" + Banlist.uu.join(', -');
        Commands['1v1'](room, user, args);
        room.send(ruleset);
        room.send("/tour name [Gen 7] UU 1v1");
    }
};
