<template>
  <div>
    <h1>Table</h1>
    <blockquote>
      <p>how is it like!</p>
    </blockquote>
    <table>
      <thead>
        <tr>
          <th></th>
          <th style="text-align: center" colspan="2">Grouping</th>
        </tr>
        <tr>
          <th>First Header</th>
          <th style="text-align: center">Second Header</th>
          <th style="text-align: right">Third Header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Content</td>
          <td style="text-align: center" colspan="2"><em>Long Cell</em></td>
        </tr>
        <tr>
          <td>Content</td>
          <td style="text-align: center"><strong>Cell</strong></td>
          <td style="text-align: right">Cell</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>New section</td>
          <td style="text-align: center">More</td>
          <td style="text-align: right">Data</td>
        </tr>
        <tr>
          <td>And more</td>
          <td style="text-align: center" colspan="2">With an escaped '\|'</td>
        </tr>
      </tbody>
    </table>
    <p>[Prototype table] \</p>
  </div>
</template>
<script></script>