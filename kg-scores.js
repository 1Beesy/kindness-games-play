/* The Kindness That Grew — Games World
   Shared "personal best" store. Saves only on THIS device (localStorage).
   No accounts, no server, nothing sent anywhere. Safe, private, offline-friendly. */
window.KG = (function () {
  var NS = 'kg_';
  var GAMES = ['spelling', 'times', 'medicine'];
  function getName() { try { return localStorage.getItem(NS + 'name') || ''; } catch (e) { return ''; } }
  function setName(n) { try { localStorage.setItem(NS + 'name', String(n || '').slice(0, 16)); } catch (e) {} }
  function getBest(game) { try { return parseInt(localStorage.getItem(NS + 'best_' + game) || '0', 10) || 0; } catch (e) { return 0; } }
  function saveBest(game, score) {
    score = Math.max(0, Math.floor(score || 0));
    if (score > getBest(game)) { try { localStorage.setItem(NS + 'best_' + game, score); } catch (e) {} return true; }
    return false;
  }
  function totalStars() { var t = 0; for (var i = 0; i < GAMES.length; i++) t += getBest(GAMES[i]); return t; }
  return { getName: getName, setName: setName, getBest: getBest, saveBest: saveBest, totalStars: totalStars, GAMES: GAMES };
})();
