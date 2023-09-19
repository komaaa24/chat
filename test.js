var maxArea = function (height) {
    let m = new Map();
    let maxi = [];
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            if (height[i] >= height[j]) {
                m.set(Math.abs(j - i), height[j] * height[j]);
            }
        }
    }
    let maxK = 0, maxV = 0;
    for (let [k, v] of m) {
        if (k > maxK && v >= maxV) {
            maxK = k;
            maxV = v;
        }
    }
    return maxV;

};


let height = [1,1];
maxArea(height);