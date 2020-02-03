export default function createQuestLink(questData) {
    const link = document.createElement('a');
    link.classList.add('quest');

    link.href= '../detailPageQuest/?quest=' + questData.id;
    link.textContent = questData.title;

    return link;
};



