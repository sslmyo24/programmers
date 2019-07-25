class Solution {
    public int[] solution(int[] prices) {
        int[] answer = new int[prices.length];
        for (int i = 0, len = prices.length; i < len; i++) {
            int time = 0;
            for (int j = i + 1; j < len; j++) {
                time++;
                if (prices[i] > prices[j]) break;
            }
            answer[i] = time;
        }
        return answer;
    }
}