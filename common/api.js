import {baseUrl} from './config.js'

export function topList(){
	return new Promise(function(reslove,reject){
		uni.request({
			url: `${baseUrl}/toplist/detail`,
			method:'GET',
			success: res => {
				let result = res.data.list
				result.length = 4
				reslove(result)
			}
		})
	})
	
}
export function list(id){
	return uni.request({
		url:`${baseUrl}/playlist/detail?id=${id}`,
		method:'GET'
	})
}
export function songDetail(id){
	return uni.request({
		url:`${baseUrl}/song/detail?ids=${id}`,
		method:'GET'
	})
}
export function songSimi(id){
	return uni.request({
		url:`${baseUrl}/simi/song?id=${id}`,
		method:'GET'
	})
}
export function songComment(id){
	return uni.request({
		url:`${baseUrl}/comment/music?id=${id}`,
		method:'GET'
	})
}
export function songLyric(id){
	return uni.request({
		url:`${baseUrl}/lyric?id=${id}`,
		method:'GET'
	})
}
export function songUrl(id){
	return uni.request({
		url:`${baseUrl}/song/url?id=${id}`,
		method:'GET'
	})
}
export function searchHot(){
	return uni.request({
		url: `${baseUrl}/search/hot/detail`,
		method:'GET'
	})
}
export function searchWord(word){
	return uni.request({
		url: `${baseUrl}/search?keywords=${word}`,
		method:'GET'
	})
}
export function searchSuggest(word){
	return uni.request({
		url: `${baseUrl}/search/suggest?keywords=${word}&type=mobile`,
		method:'GET'
	})
}
