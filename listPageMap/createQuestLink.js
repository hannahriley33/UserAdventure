export default function renderQuestLink(questData) {
    const link = document.createElement('a');
    link.classList.add('quest');

    link.href= '../detailPageQuest/?=' + questData.id;
    link.textContent = questData.title;

    return link;
};



