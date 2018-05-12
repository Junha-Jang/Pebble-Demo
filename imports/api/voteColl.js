import { Mongo } from 'meteor/mongo';

// { voteId, title, poll: [ { itemIdx, name, count }, ... ], schedule: { start, end } }

const voteColl = new Mongo.Collection('votes');

function lastIndex() {
    let ret = 0;
    // O(n).... 극혐
    voteColl.find().forEach((doc) => {
        ret = Math.max(ret, doc.voteId);
    });
    return ret;
}

function makeVote(vote) {
    // 인자 검증
    const newIndex = lastIndex() + 1;
    vote.voteId = newIndex;
    voteColl.insert(vote);
}

function getVote(voteId) {
    const vote = voteColl.findOne({ voteId: voteId });
    return vote;
}

function getAllVote(voteId) {
    const ret = voteColl.find().fetch();
    return ret;
}

function removeVote(_id) {
    voteColl.remove(_id);
}

function voteForItem(_id, itemIdx) {
    const field = 'poll.' + String(itemIdx) + '.count';
    const query = {}; query[field] = 1;
    voteColl.update(_id, { $inc: query });
}

export default voteColl;
export { makeVote, getVote, getAllVote, removeVote, voteForItem };