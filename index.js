let sunbase = [
    {
        "id": "c0ac49c5-871e-4c72-a878-251de465e6b4",
        "type": "input",
        "label": "Sample Input",
        "placeholder": "Sample placeholder"
    },
    {
        "id": "146e69c2-1630-4a27-9d0b-f09e463a66e4",
        "type": "select",
        "label": "Sample Select",
        "options": ["Sample Option", "Sample Option", "Sample Option"]
    },
    {
        "id": "45002ecf-85cf-4852-bc46-529f94a758f5",
        "type": "textarea",
        "label": "Sample Textarea",
        "placeholder": "Sample Placeholder"
    },
    {
        "id": "680cff8d-c7f9-40be-8767-e3d6ba420952",
        "type": "checkbox",
        "label": "Sample Checkbox",
    },
];

let Main = document.getElementById('Main');

function showData() {
    Main.innerHTML = '';

    sunbase.forEach((ele, idx) => {
        let elementDiv = document.createElement('div');
        elementDiv.setAttribute('draggable', true);
        elementDiv.setAttribute('data-index', idx);
        elementDiv.classList.add('draggable');

        if (ele.type == 'input') {
            elementDiv.innerHTML = `<label>Sample Input:</label>
            <input type='text' placeholder="sample input">
            <button onclick="deleteElement(${idx})">Delete</button>`;
        } else if (ele.type === 'select') {
            elementDiv.innerHTML = `<label>Select Option:</label>
            <select>
                <option>Sample Option</option>
                <option>Sample Option</option>
                <option>Sample Option</option>
            </select>
            <button onclick="deleteElement(${idx})">Delete</button>`;
        } else if (ele.type === 'textarea') {
            elementDiv.innerHTML = `<label>Text Area:</label>
            <textarea placeholder="Sample Placeholder"></textarea>
            <button onclick="deleteElement(${idx})">Delete</button>`;
        } else if (ele.type === 'checkbox') {
            elementDiv.innerHTML = `<label>Checkbox:</label>
            <input type='checkbox'>
            <button onclick="deleteElement(${idx})">Delete</button>`;
        }

        elementDiv.addEventListener('dragstart', dragStart);
        elementDiv.addEventListener('dragover', dragOver);
        elementDiv.addEventListener('drop', drop);

        Main.appendChild(elementDiv);
    });
}

function deleteElement(idx) {
    sunbase.splice(idx, 1);
    showData();
}

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.index);
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    let draggedIdx = e.dataTransfer.getData('text/plain');
    let targetIdx = e.target.closest('.draggable').dataset.index;

    let draggedItem = sunbase.splice(draggedIdx, 1)[0];
    sunbase.splice(targetIdx, 0, draggedItem);

    showData();
}

let inputPush = document.getElementById('inputpush');
let Selectpush = document.getElementById('Selectpush');
let textAreapush = document.getElementById('textAreapush');
let checkBoxpush = document.getElementById('CheckBoxPush');

inputPush.addEventListener('click', function() {
    let uuid = self.crypto.randomUUID();
    sunbase.push({ "id": uuid, "type": "input", "label": "added Input", "placeholder": "added placeholder" });
    showData();
});

Selectpush.addEventListener('click', function() {
    let uuid = self.crypto.randomUUID();
    sunbase.push({ "id": uuid, "type": "select", "label": "added Select", "options": ["Sample Option", "Sample Option", "Sample Option"] });
    showData();
});

textAreapush.addEventListener('click', function() {
    let uuid = self.crypto.randomUUID();
    sunbase.push({ "id": uuid, "type": "textarea", "label": "Added Textarea", "placeholder": "Sample Placeholder" });
    showData();
});

checkBoxpush.addEventListener('click', function() {
    let uuid = self.crypto.randomUUID();
    sunbase.push({ "id": uuid, "type": "checkbox", "label": "added Checkbox" });
    showData();
});

showData();

