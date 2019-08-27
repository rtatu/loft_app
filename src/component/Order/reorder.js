function Reorder(element) {
  this.elements = document.getElementsByClassName(element);
  this.draggingElement = null;
  this.direction = null; // (direction == true) ? 'down' : 'up'
  this.yPostition = null;
}

Reorder.prototype.startReordering = function() {
  for (let item of this.elements) {
    item.addEventListener("drag", this.dragging.bind(this));
    item.addEventListener("dragstart", this.dragstart.bind(this));
    item.addEventListener("dragenter", this.dragenter.bind(this));
    item.addEventListener("dragover", this.dragover.bind(this));
    item.addEventListener("dragleave", this.dragleave.bind(this));
    item.addEventListener("drop", this.drop.bind(this));
    item.addEventListener("dragend", this.dragend.bind(this));
  }
};

Reorder.prototype.stopReordering = function() {
  for (let item of this.elements) {
    item.removeEventListener("drag", this.dragging.bind(this));
    item.removeEventListener("dragstart", this.dragstart.bind(this));
    item.removeEventListener("dragenter", this.dragenter.bind(this));
    item.removeEventListener("dragover", this.dragover.bind(this));
    item.removeEventListener("drop", this.drop.bind(this));
    item.removeEventListener("dragend", this.dragend.bind(this));
  }
};

// check the direction of dragging
Reorder.prototype.dragging = function(e) {
  let clientY = e.clientY;
  if (this.yPostition != null && clientY - this.yPostition != 0) {
    this.direction = clientY - this.yPostition >= 0 ? true : false;
  }
  this.yPostition = clientY;
};

// get the dragging element on dragstart
Reorder.prototype.dragstart = function(e) {
  this.yPostition = e.clientY;
  this.draggingElement = e.target;
};

// add style on dragEnter
Reorder.prototype.dragenter = function(e) {
  let dragOverElement = e.target;
  if (dragOverElement.classList.contains("leg")) {
    dragOverElement.style.borderBottom = "2px solid red";
  }
};
Reorder.prototype.dragleave = function(e) {
  let dragOverElement = e.target;
  if (dragOverElement.classList.contains("leg")) {
    dragOverElement.style.borderBottom = "1px solid rgba(112,112,112,0.05)";
  }
};

Reorder.prototype.dragover = function(e) {
  e.preventDefault();
};

Reorder.prototype.drop = function(e) {
  if (e.target == this.draggingElement) {
    this.draggingElement = null;
    this.direction = null;
    this.yPostition = null;
    return true;
  }

  let order = e.target.dataset["order"];
  e.target.style.borderBottom = "1px solid rgba(112,112,112,0.05)";

  this.reorder(order);

  this.draggingElement = null;
  this.direction = null;
  this.yPostition = null;
};

Reorder.prototype.reorder = function(order) {
  let dragginElementOrder = this.draggingElement.dataset.order;
  if (order - dragginElementOrder > 0) {
    for (
      let index = this.draggingElement.dataset.order;
      index <= order;
      index++
    ) {
      if (this.elements[index] != this.draggingElement) {
        this.elements[index].dataset["order"]--;
      }
    }
  } else {
    for (
      let index = this.draggingElement.dataset.order;
      index >= order;
      index--
    ) {
      if (this.elements[index] != this.draggingElement) {
        this.elements[index].dataset["order"]++;
      }
    }
  }
  this.draggingElement.dataset.order = order;
  this.renderOrder();
  // this.checkError();
};

Reorder.prototype.dragend = function() {
  this.checkError();
};

Reorder.prototype.renderOrder = function() {
  let parentElement = document.getElementsByClassName("order-leg")[0];
  let items = Array.prototype.slice.call(this.elements);
  for (let element of items) {
    parentElement.removeChild(element);
  }
  items.sort((item1, item2) => item1.dataset.order - item2.dataset.order);
  // console.log(parentElement.children);
  items.map(child => parentElement.appendChild(child));

  // this.elements[0].parentElement.appendChild(this.elements);
};

Reorder.prototype.checkError = function async() {
  console.log("yolo");
  for (let element of this.elements) {
    let constraints = this.getConstraints(element);
    if (!constraints) {
      continue;
    }
    let finalConstraint = this.searchElement(
      element.dataset.order,
      constraints[0],
      constraints[1],
      constraints[2]
    );
    if (!finalConstraint) {
      continue;
    }

    let correct = this.checkConstraints(
      finalConstraint[0],
      finalConstraint[1],
      finalConstraint[2]
    );
    if (!correct) {
      element.style.border = "1px solid red";
    } else {
      element.style.border = "1px solid rgba(112,112,112,0.05)";
    }
  }
};

Reorder.prototype.searchElement = function(checkTo, id, type, postition) {
  let constraint = [];
  for (let element of this.elements) {
    let from = JSON.parse(element.dataset.from);
    let to = JSON.parse(element.dataset.to);

    if (Array.isArray(id[0])) {
      if (from) {
        if (parseInt(id[0]) == parseInt(from.id)) {
          if (type[0] == from.name) {
            constraint.push(element);
          }
        }

        if (parseInt(id[1]) == parseInt(from.id)) {
          if (type[1] == from.name) {
            constraint.push(element);
          }
        }
      }

      if (to) {
        if (parseInt(id) == parseInt(to.id)) {
          if (type == to.name) {
            constraint.push(element);
          }
        }

        if (parseInt(id[1]) == parseInt(to.id)) {
          if (type[1] == to.name) {
            constraint.push(element);
          }
        }
      }
    } else {
      if (from) {
        if (parseInt(id) == parseInt(from.id)) {
          if (type == from.name) {
            constraint.push(element);
          }
        }
      }

      if (to) {
        if (parseInt(id) == parseInt(to.id)) {
          if (type == to.name) {
            constraint.push(element);
          }
        }
      }
    }
  }

  if (constraint.length == 1) {
    return [checkTo, constraint[0].dataset.order, postition];
  }

  if (constraint.length == 0) {
    return false;
  }

  let order =
    constraint[0].dataset.order > constraint[1].dataset.order
      ? [constraint[0].dataset.order, constraint[1].dataset.order]
      : [constraint[1].dataset.order, constraint[0].dataset.order];

  return [checkTo, order, postition];
};

Reorder.prototype.checkConstraints = function(checkTo, checkWith, type) {
  switch (type) {
    case "before":
      return parseInt(checkTo) < parseInt(checkWith);

    case "after":
      return parseInt(checkTo) > parseInt(checkWith);

    case "between":
      return checkWith[0] <= checkTo <= checkWith[1];
    default:
      return false;
  }
};

Reorder.prototype.getConstraints = function(element) {
  let from = JSON.parse(element.dataset.from);
  let to = JSON.parse(element.dataset.to);

  let fromEvent = from.event;
  let toEvent = to.event;

  let constraints = [];
  if (fromEvent) {
    constraints.push([fromEvent.id, fromEvent.name, fromEvent.position]);
  }

  if (toEvent) {
    constraints.push([toEvent.id, toEvent.name, toEvent.position]);
  }

  if (constraints.length == 1) {
    return constraints[0];
  }
  if (constraints.length == 0) {
    return false;
  }

  return [
    [constraints[0][0], constraints[1][0]],
    [constraints[0][1], constraints[1][1]],
    "between"
  ];
};

export default Reorder;
