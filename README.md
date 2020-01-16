# タイピングソフト
https://typing-ts.herokuapp.com/
### 作成目的
以下の点について重点的に学習を行うため。  
・railsの基本的な機能  
・JavaScript,Jquery（以下、「JS」という）
### 環境
・Rails 5.2.4  
・ruby 2.5.1  
・PostgreSQL 12.1  
・heroku
### 機能概要
・入力されたキーの判定（JS）  
・ストップウォッチ機能(JS)  
・文章の作成、編集、削除  
・ランキング登録  
### 使用した技術
・showを除くアクションの活用(rails)  
・DBのCRUD操作(rails)  
・Haml  
・scss  
・gem : gon, devise, pry-rails

## DB設計
### usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|user_id|integer|foreign_key: true|
#### Association
- has_many :sentences
- has_many :results

### sentencesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|romaji|text|null: false|
|user_id|integer||
#### Association
- belongs_to :user

### resultsテーブル
|Column|Type|Options|
|------|----|-------|
|stc_num|integer|null: false|
|string_num|integer|null: false|
|average|float|null: false, index|
|user_id|integer|foreign_key: true|
#### Association
- belongs_to :user
