/*
 * Copyright (C) 2018 roastedfrost
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */


class Node {
    constructor(data) {
        this.children = [];
        this.data = data;
    }

    addChild(node) {
        this.children = [...this.children, node];
        return true;
    }

    removeChild(node) {
        const index = this.children.findIndex(node);

        if (index === -1) {
            return false;
        }
        this.children = [...this.children].splice(index, 1);
        return true;
    }

    isLeaf() {
        return this.children.length === 0;
    }

    traverseDepthFirst(callback) {
        (function _r(currentNode) {
            callback(currentNode);
            currentNode.children.forEach(_r);
        })(this);
    }
}


class Tree {
    constructor(data) {
        this.root = new Node(data);
    }

    traverseDepthFirst(callback) {
        this.root.traverseDepthFirst(callback);
    }
}


exports.Node = Node;
exports.Tree = Tree;
