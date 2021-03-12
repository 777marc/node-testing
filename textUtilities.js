const expect = require('chai').expect;

function titleCase(title) {

    let words = title.split(' ');
    let titleCaseWords = words.map(word => {
        return word[0].toUpperCase() + word.substring(1);
    });
    return titleCaseWords.join(' ');
    
}

expect(titleCase('star wars')).to.be.a('string');

expect(titleCase('star wars')).to.be.equal('Star Wars');
