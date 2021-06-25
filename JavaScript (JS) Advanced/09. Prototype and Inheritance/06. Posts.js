function solve () {
    class Post{
        constructor(title,content) {
            this.title = title;
            this.content = content
        }
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }
    class SocialMediaPost extends Post {
        constructor(title,content,likes,dislikes) {
            super(title,content)
            this.likes = Number(likes)
            this.dislikes = Number(dislikes)
            this.comments = []
        }
        addComment(comment) {
            this.comments.push(comment)
        }
        toString() {
            let thisResult = super.toString() + `\nRating: ${this.likes-this.dislikes}`
            if (this.comments.length>0) {
                thisResult+=`\nComments:\n`
                for (let comment of this.comments) {
                    thisResult+=` * ${comment}\n`
                }
            }
            return thisResult.trim()
        }
    }
    class BlogPost extends Post {
        constructor(title,content,views) {
            super(title,content)
            this.views = Number(views)
    
        }
        view() {
            this.views++
            return this
        }
        toString() {
            let result = super.toString() + `\nViews: ${this.views}`
            return result
        }
    }

    return {Post,SocialMediaPost,BlogPost}
}


let classes = solve();

let test = new classes.BlogPost("TestTitle", "TestContent", 5);
console.log(test)
console.log(test.toString())
console.log(test.view().view().view())
