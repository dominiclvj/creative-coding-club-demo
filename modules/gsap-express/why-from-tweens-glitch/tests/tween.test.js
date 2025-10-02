import * as fs from 'fs'
import * as path from 'path'

import {describe, expect, it} from 'vitest'
import {parse } from '@babel/parser'



describe("comments", () => {
    it('added a comment', () => {
        const fileContents = fs.readFileSync(path.join(__dirname,'../exercise/comments.js')).toString()

        const tree = parse(fileContents, {
            sourceType: "module",
            attachComment: true
        })

        expect(tree.comments.length).toBeGreaterThan(0)
        
        expect(tree.comments.some(comment => comment.type === "CommentLine")).toBe(true)
    })
    it('added a multiline comment', () => {
        const fileContents = fs.readFileSync(path.join(__dirname,'../exercise/comments.js')).toString()

        const tree = parse(fileContents, {
            sourceType: "module",
            attachComment: true
        })

        expect(tree.comments.length).toBeGreaterThan(0)
        
        expect(tree.comments.some(comment => comment.type === "CommentBlock")).toBe(true)

    })
})