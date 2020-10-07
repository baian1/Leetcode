import {assert} from 'chai';
import {hashMap} from '@ts/哈希表';

describe("hashmap",function (){
    let map = new hashMap();
    beforeEach(()=>{
        map = new hashMap();
    })
    describe("新增数据",()=>{
        it('add value',()=>{
            map.install("a","1");
            map.install('b',"2")
            assert.equal(map.get("a"),"1","新增数据不相等");
            assert.equal(map.get("b"),"2","新增数据不相等");
        })
    })
    describe("清除数据",()=>{
        it('clean data',()=>{
            map.install("a","1");
            map.clearup();
            assert.equal(map.get("a"),null,"数据清除失败");
        })
    })
    describe.only('111',()=>{
        it.only('111',function (){
            this.skip();
        })
        it('222',()=>{
            
        })
        it('333',()=>{
            
        })
        it.only('444')
    })
})